import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2918Component } from './test-component2918.component';

describe('TestComponent2918Component', () => {
  let component: TestComponent2918Component;
  let fixture: ComponentFixture<TestComponent2918Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2918Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
