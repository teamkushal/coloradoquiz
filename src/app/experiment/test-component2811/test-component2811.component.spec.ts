import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2811Component } from './test-component2811.component';

describe('TestComponent2811Component', () => {
  let component: TestComponent2811Component;
  let fixture: ComponentFixture<TestComponent2811Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2811Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
