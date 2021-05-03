import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent667Component } from './test-component667.component';

describe('TestComponent667Component', () => {
  let component: TestComponent667Component;
  let fixture: ComponentFixture<TestComponent667Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent667Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
