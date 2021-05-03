import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3319Component } from './test-component3319.component';

describe('TestComponent3319Component', () => {
  let component: TestComponent3319Component;
  let fixture: ComponentFixture<TestComponent3319Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3319Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
