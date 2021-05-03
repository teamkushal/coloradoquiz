import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2310Component } from './test-component2310.component';

describe('TestComponent2310Component', () => {
  let component: TestComponent2310Component;
  let fixture: ComponentFixture<TestComponent2310Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2310Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
