import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3140Component } from './test-component3140.component';

describe('TestComponent3140Component', () => {
  let component: TestComponent3140Component;
  let fixture: ComponentFixture<TestComponent3140Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3140Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
