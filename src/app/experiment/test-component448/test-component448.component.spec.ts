import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent448Component } from './test-component448.component';

describe('TestComponent448Component', () => {
  let component: TestComponent448Component;
  let fixture: ComponentFixture<TestComponent448Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent448Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
