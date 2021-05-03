import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3631Component } from './test-component3631.component';

describe('TestComponent3631Component', () => {
  let component: TestComponent3631Component;
  let fixture: ComponentFixture<TestComponent3631Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3631Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
