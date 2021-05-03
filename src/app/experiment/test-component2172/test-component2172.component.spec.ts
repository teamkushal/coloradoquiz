import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2172Component } from './test-component2172.component';

describe('TestComponent2172Component', () => {
  let component: TestComponent2172Component;
  let fixture: ComponentFixture<TestComponent2172Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2172Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
