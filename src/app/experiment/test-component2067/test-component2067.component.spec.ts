import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2067Component } from './test-component2067.component';

describe('TestComponent2067Component', () => {
  let component: TestComponent2067Component;
  let fixture: ComponentFixture<TestComponent2067Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2067Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2067Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
