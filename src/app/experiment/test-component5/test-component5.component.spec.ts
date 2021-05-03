import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent5Component } from './test-component5.component';

describe('TestComponent5Component', () => {
  let component: TestComponent5Component;
  let fixture: ComponentFixture<TestComponent5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
