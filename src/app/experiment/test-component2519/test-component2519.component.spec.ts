import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2519Component } from './test-component2519.component';

describe('TestComponent2519Component', () => {
  let component: TestComponent2519Component;
  let fixture: ComponentFixture<TestComponent2519Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2519Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
