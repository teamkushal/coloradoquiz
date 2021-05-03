import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent470Component } from './test-component470.component';

describe('TestComponent470Component', () => {
  let component: TestComponent470Component;
  let fixture: ComponentFixture<TestComponent470Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent470Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
