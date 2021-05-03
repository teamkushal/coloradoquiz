import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2024Component } from './test-component2024.component';

describe('TestComponent2024Component', () => {
  let component: TestComponent2024Component;
  let fixture: ComponentFixture<TestComponent2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2024Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
