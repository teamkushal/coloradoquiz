import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent422Component } from './test-component422.component';

describe('TestComponent422Component', () => {
  let component: TestComponent422Component;
  let fixture: ComponentFixture<TestComponent422Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent422Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
