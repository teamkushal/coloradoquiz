import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3334Component } from './test-component3334.component';

describe('TestComponent3334Component', () => {
  let component: TestComponent3334Component;
  let fixture: ComponentFixture<TestComponent3334Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3334Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
