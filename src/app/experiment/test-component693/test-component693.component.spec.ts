import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent693Component } from './test-component693.component';

describe('TestComponent693Component', () => {
  let component: TestComponent693Component;
  let fixture: ComponentFixture<TestComponent693Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent693Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
