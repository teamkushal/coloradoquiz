import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2952Component } from './test-component2952.component';

describe('TestComponent2952Component', () => {
  let component: TestComponent2952Component;
  let fixture: ComponentFixture<TestComponent2952Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2952Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
