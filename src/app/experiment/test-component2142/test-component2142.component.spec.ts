import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2142Component } from './test-component2142.component';

describe('TestComponent2142Component', () => {
  let component: TestComponent2142Component;
  let fixture: ComponentFixture<TestComponent2142Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2142Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
