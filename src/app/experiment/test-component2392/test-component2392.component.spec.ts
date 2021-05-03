import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2392Component } from './test-component2392.component';

describe('TestComponent2392Component', () => {
  let component: TestComponent2392Component;
  let fixture: ComponentFixture<TestComponent2392Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2392Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
