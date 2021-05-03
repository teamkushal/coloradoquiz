import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2342Component } from './test-component2342.component';

describe('TestComponent2342Component', () => {
  let component: TestComponent2342Component;
  let fixture: ComponentFixture<TestComponent2342Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2342Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
