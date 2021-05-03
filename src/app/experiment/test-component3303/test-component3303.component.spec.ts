import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3303Component } from './test-component3303.component';

describe('TestComponent3303Component', () => {
  let component: TestComponent3303Component;
  let fixture: ComponentFixture<TestComponent3303Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3303Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
