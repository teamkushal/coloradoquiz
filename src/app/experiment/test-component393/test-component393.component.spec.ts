import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent393Component } from './test-component393.component';

describe('TestComponent393Component', () => {
  let component: TestComponent393Component;
  let fixture: ComponentFixture<TestComponent393Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent393Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
