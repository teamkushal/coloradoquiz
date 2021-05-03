import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2159Component } from './test-component2159.component';

describe('TestComponent2159Component', () => {
  let component: TestComponent2159Component;
  let fixture: ComponentFixture<TestComponent2159Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2159Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
