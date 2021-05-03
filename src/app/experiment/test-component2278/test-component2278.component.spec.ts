import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2278Component } from './test-component2278.component';

describe('TestComponent2278Component', () => {
  let component: TestComponent2278Component;
  let fixture: ComponentFixture<TestComponent2278Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2278Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
