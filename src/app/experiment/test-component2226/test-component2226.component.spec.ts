import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2226Component } from './test-component2226.component';

describe('TestComponent2226Component', () => {
  let component: TestComponent2226Component;
  let fixture: ComponentFixture<TestComponent2226Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2226Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
