import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2851Component } from './test-component2851.component';

describe('TestComponent2851Component', () => {
  let component: TestComponent2851Component;
  let fixture: ComponentFixture<TestComponent2851Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2851Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
