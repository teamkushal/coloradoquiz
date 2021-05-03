import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3357Component } from './test-component3357.component';

describe('TestComponent3357Component', () => {
  let component: TestComponent3357Component;
  let fixture: ComponentFixture<TestComponent3357Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3357Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
