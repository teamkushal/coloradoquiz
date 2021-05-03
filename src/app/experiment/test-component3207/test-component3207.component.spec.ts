import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3207Component } from './test-component3207.component';

describe('TestComponent3207Component', () => {
  let component: TestComponent3207Component;
  let fixture: ComponentFixture<TestComponent3207Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3207Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
