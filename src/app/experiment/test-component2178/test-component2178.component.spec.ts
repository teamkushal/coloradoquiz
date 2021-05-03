import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2178Component } from './test-component2178.component';

describe('TestComponent2178Component', () => {
  let component: TestComponent2178Component;
  let fixture: ComponentFixture<TestComponent2178Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2178Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
