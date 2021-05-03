import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent441Component } from './test-component441.component';

describe('TestComponent441Component', () => {
  let component: TestComponent441Component;
  let fixture: ComponentFixture<TestComponent441Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent441Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
