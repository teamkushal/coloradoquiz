import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3583Component } from './test-component3583.component';

describe('TestComponent3583Component', () => {
  let component: TestComponent3583Component;
  let fixture: ComponentFixture<TestComponent3583Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3583Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
