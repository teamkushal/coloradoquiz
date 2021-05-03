import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent337Component } from './test-component337.component';

describe('TestComponent337Component', () => {
  let component: TestComponent337Component;
  let fixture: ComponentFixture<TestComponent337Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent337Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
