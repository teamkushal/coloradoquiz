import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3504Component } from './test-component3504.component';

describe('TestComponent3504Component', () => {
  let component: TestComponent3504Component;
  let fixture: ComponentFixture<TestComponent3504Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3504Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
