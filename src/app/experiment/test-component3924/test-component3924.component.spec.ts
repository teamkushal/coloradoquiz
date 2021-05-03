import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3924Component } from './test-component3924.component';

describe('TestComponent3924Component', () => {
  let component: TestComponent3924Component;
  let fixture: ComponentFixture<TestComponent3924Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3924Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
