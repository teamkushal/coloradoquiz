import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2216Component } from './test-component2216.component';

describe('TestComponent2216Component', () => {
  let component: TestComponent2216Component;
  let fixture: ComponentFixture<TestComponent2216Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2216Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
