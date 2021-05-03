import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3788Component } from './test-component3788.component';

describe('TestComponent3788Component', () => {
  let component: TestComponent3788Component;
  let fixture: ComponentFixture<TestComponent3788Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3788Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
