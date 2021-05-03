import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3836Component } from './test-component3836.component';

describe('TestComponent3836Component', () => {
  let component: TestComponent3836Component;
  let fixture: ComponentFixture<TestComponent3836Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3836Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
