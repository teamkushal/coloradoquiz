import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent404Component } from './test-component404.component';

describe('TestComponent404Component', () => {
  let component: TestComponent404Component;
  let fixture: ComponentFixture<TestComponent404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
