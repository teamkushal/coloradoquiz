import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent893Component } from './test-component893.component';

describe('TestComponent893Component', () => {
  let component: TestComponent893Component;
  let fixture: ComponentFixture<TestComponent893Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent893Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
