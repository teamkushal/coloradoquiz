import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent352Component } from './test-component352.component';

describe('TestComponent352Component', () => {
  let component: TestComponent352Component;
  let fixture: ComponentFixture<TestComponent352Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent352Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
