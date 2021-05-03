import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent417Component } from './test-component417.component';

describe('TestComponent417Component', () => {
  let component: TestComponent417Component;
  let fixture: ComponentFixture<TestComponent417Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent417Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
