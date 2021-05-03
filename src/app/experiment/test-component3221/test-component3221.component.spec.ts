import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3221Component } from './test-component3221.component';

describe('TestComponent3221Component', () => {
  let component: TestComponent3221Component;
  let fixture: ComponentFixture<TestComponent3221Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3221Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
