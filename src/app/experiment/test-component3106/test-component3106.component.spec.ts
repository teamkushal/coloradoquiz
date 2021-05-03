import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3106Component } from './test-component3106.component';

describe('TestComponent3106Component', () => {
  let component: TestComponent3106Component;
  let fixture: ComponentFixture<TestComponent3106Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3106Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
