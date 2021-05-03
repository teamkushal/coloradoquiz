import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent397Component } from './test-component397.component';

describe('TestComponent397Component', () => {
  let component: TestComponent397Component;
  let fixture: ComponentFixture<TestComponent397Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent397Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
