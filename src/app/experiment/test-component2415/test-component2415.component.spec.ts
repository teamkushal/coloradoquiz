import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2415Component } from './test-component2415.component';

describe('TestComponent2415Component', () => {
  let component: TestComponent2415Component;
  let fixture: ComponentFixture<TestComponent2415Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2415Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
