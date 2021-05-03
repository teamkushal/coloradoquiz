import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2762Component } from './test-component2762.component';

describe('TestComponent2762Component', () => {
  let component: TestComponent2762Component;
  let fixture: ComponentFixture<TestComponent2762Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2762Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
