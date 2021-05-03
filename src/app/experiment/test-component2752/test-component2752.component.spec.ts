import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2752Component } from './test-component2752.component';

describe('TestComponent2752Component', () => {
  let component: TestComponent2752Component;
  let fixture: ComponentFixture<TestComponent2752Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2752Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
