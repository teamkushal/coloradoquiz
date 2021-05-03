import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent752Component } from './test-component752.component';

describe('TestComponent752Component', () => {
  let component: TestComponent752Component;
  let fixture: ComponentFixture<TestComponent752Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent752Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
