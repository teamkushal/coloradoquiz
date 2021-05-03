import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2929Component } from './test-component2929.component';

describe('TestComponent2929Component', () => {
  let component: TestComponent2929Component;
  let fixture: ComponentFixture<TestComponent2929Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2929Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
