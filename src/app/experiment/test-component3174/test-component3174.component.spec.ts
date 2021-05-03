import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3174Component } from './test-component3174.component';

describe('TestComponent3174Component', () => {
  let component: TestComponent3174Component;
  let fixture: ComponentFixture<TestComponent3174Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3174Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
