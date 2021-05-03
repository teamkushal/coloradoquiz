import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2735Component } from './test-component2735.component';

describe('TestComponent2735Component', () => {
  let component: TestComponent2735Component;
  let fixture: ComponentFixture<TestComponent2735Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2735Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
