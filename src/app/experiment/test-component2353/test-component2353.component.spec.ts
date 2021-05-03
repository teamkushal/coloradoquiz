import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2353Component } from './test-component2353.component';

describe('TestComponent2353Component', () => {
  let component: TestComponent2353Component;
  let fixture: ComponentFixture<TestComponent2353Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2353Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
